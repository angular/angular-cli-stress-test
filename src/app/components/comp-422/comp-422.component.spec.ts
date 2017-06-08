/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp422Component } from './comp-422.component';

describe('Comp422Component', () => {
  let component: Comp422Component;
  let fixture: ComponentFixture<Comp422Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp422Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp422Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
