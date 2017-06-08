/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2706Component } from './comp-2706.component';

describe('Comp2706Component', () => {
  let component: Comp2706Component;
  let fixture: ComponentFixture<Comp2706Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2706Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2706Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
