/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3335Component } from './comp-3335.component';

describe('Comp3335Component', () => {
  let component: Comp3335Component;
  let fixture: ComponentFixture<Comp3335Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3335Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3335Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
