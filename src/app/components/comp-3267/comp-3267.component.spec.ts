/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3267Component } from './comp-3267.component';

describe('Comp3267Component', () => {
  let component: Comp3267Component;
  let fixture: ComponentFixture<Comp3267Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3267Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3267Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
