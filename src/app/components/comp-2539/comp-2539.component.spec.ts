/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2539Component } from './comp-2539.component';

describe('Comp2539Component', () => {
  let component: Comp2539Component;
  let fixture: ComponentFixture<Comp2539Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2539Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2539Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
