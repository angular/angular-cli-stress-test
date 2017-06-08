/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4106Component } from './comp-4106.component';

describe('Comp4106Component', () => {
  let component: Comp4106Component;
  let fixture: ComponentFixture<Comp4106Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4106Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4106Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
