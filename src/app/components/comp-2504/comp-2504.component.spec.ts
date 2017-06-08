/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2504Component } from './comp-2504.component';

describe('Comp2504Component', () => {
  let component: Comp2504Component;
  let fixture: ComponentFixture<Comp2504Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2504Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2504Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
