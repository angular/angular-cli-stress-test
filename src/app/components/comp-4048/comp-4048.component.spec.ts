/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4048Component } from './comp-4048.component';

describe('Comp4048Component', () => {
  let component: Comp4048Component;
  let fixture: ComponentFixture<Comp4048Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4048Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4048Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
