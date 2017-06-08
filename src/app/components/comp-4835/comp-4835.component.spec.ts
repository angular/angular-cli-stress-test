/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4835Component } from './comp-4835.component';

describe('Comp4835Component', () => {
  let component: Comp4835Component;
  let fixture: ComponentFixture<Comp4835Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4835Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4835Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
