/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4613Component } from './comp-4613.component';

describe('Comp4613Component', () => {
  let component: Comp4613Component;
  let fixture: ComponentFixture<Comp4613Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4613Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4613Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
