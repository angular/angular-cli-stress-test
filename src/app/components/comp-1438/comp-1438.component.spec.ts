/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1438Component } from './comp-1438.component';

describe('Comp1438Component', () => {
  let component: Comp1438Component;
  let fixture: ComponentFixture<Comp1438Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1438Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1438Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
