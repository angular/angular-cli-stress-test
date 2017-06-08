/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4119Component } from './comp-4119.component';

describe('Comp4119Component', () => {
  let component: Comp4119Component;
  let fixture: ComponentFixture<Comp4119Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4119Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4119Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
