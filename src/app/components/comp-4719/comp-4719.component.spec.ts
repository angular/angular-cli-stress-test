/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4719Component } from './comp-4719.component';

describe('Comp4719Component', () => {
  let component: Comp4719Component;
  let fixture: ComponentFixture<Comp4719Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4719Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4719Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
