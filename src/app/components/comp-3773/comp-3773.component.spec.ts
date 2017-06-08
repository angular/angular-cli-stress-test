/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3773Component } from './comp-3773.component';

describe('Comp3773Component', () => {
  let component: Comp3773Component;
  let fixture: ComponentFixture<Comp3773Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3773Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3773Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
