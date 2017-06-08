/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3347Component } from './comp-3347.component';

describe('Comp3347Component', () => {
  let component: Comp3347Component;
  let fixture: ComponentFixture<Comp3347Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3347Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3347Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
