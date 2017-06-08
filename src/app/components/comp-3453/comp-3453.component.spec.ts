/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3453Component } from './comp-3453.component';

describe('Comp3453Component', () => {
  let component: Comp3453Component;
  let fixture: ComponentFixture<Comp3453Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3453Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3453Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
