/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp599Component } from './comp-599.component';

describe('Comp599Component', () => {
  let component: Comp599Component;
  let fixture: ComponentFixture<Comp599Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp599Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp599Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
