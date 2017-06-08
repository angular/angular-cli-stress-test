/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1319Component } from './comp-1319.component';

describe('Comp1319Component', () => {
  let component: Comp1319Component;
  let fixture: ComponentFixture<Comp1319Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1319Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1319Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
