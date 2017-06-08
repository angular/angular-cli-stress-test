/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3910Component } from './comp-3910.component';

describe('Comp3910Component', () => {
  let component: Comp3910Component;
  let fixture: ComponentFixture<Comp3910Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3910Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3910Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
