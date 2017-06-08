/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3280Component } from './comp-3280.component';

describe('Comp3280Component', () => {
  let component: Comp3280Component;
  let fixture: ComponentFixture<Comp3280Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3280Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3280Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
