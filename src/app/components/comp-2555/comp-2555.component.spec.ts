/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2555Component } from './comp-2555.component';

describe('Comp2555Component', () => {
  let component: Comp2555Component;
  let fixture: ComponentFixture<Comp2555Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2555Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2555Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
