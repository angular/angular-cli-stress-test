/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3186Component } from './comp-3186.component';

describe('Comp3186Component', () => {
  let component: Comp3186Component;
  let fixture: ComponentFixture<Comp3186Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3186Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3186Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
