/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4834Component } from './comp-4834.component';

describe('Comp4834Component', () => {
  let component: Comp4834Component;
  let fixture: ComponentFixture<Comp4834Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4834Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4834Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
