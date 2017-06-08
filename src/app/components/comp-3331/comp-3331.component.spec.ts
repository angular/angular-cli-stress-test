/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3331Component } from './comp-3331.component';

describe('Comp3331Component', () => {
  let component: Comp3331Component;
  let fixture: ComponentFixture<Comp3331Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3331Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3331Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
