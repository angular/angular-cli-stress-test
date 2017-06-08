/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4075Component } from './comp-4075.component';

describe('Comp4075Component', () => {
  let component: Comp4075Component;
  let fixture: ComponentFixture<Comp4075Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4075Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4075Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
