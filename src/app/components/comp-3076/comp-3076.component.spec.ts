/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3076Component } from './comp-3076.component';

describe('Comp3076Component', () => {
  let component: Comp3076Component;
  let fixture: ComponentFixture<Comp3076Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3076Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3076Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
