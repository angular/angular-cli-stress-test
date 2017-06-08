/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3838Component } from './comp-3838.component';

describe('Comp3838Component', () => {
  let component: Comp3838Component;
  let fixture: ComponentFixture<Comp3838Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3838Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3838Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
