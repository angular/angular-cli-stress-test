/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4294Component } from './comp-4294.component';

describe('Comp4294Component', () => {
  let component: Comp4294Component;
  let fixture: ComponentFixture<Comp4294Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4294Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4294Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
