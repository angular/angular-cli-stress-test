/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4150Component } from './comp-4150.component';

describe('Comp4150Component', () => {
  let component: Comp4150Component;
  let fixture: ComponentFixture<Comp4150Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4150Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4150Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
