/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3422Component } from './comp-3422.component';

describe('Comp3422Component', () => {
  let component: Comp3422Component;
  let fixture: ComponentFixture<Comp3422Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3422Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3422Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
