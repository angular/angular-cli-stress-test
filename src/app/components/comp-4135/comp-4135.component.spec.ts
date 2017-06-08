/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4135Component } from './comp-4135.component';

describe('Comp4135Component', () => {
  let component: Comp4135Component;
  let fixture: ComponentFixture<Comp4135Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4135Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4135Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
