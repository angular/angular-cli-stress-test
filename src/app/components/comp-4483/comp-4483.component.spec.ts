/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4483Component } from './comp-4483.component';

describe('Comp4483Component', () => {
  let component: Comp4483Component;
  let fixture: ComponentFixture<Comp4483Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4483Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4483Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
