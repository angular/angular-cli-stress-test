/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2691Component } from './comp-2691.component';

describe('Comp2691Component', () => {
  let component: Comp2691Component;
  let fixture: ComponentFixture<Comp2691Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2691Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2691Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
