/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2686Component } from './comp-2686.component';

describe('Comp2686Component', () => {
  let component: Comp2686Component;
  let fixture: ComponentFixture<Comp2686Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2686Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2686Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
