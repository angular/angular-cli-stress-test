/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2727Component } from './comp-2727.component';

describe('Comp2727Component', () => {
  let component: Comp2727Component;
  let fixture: ComponentFixture<Comp2727Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2727Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2727Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
