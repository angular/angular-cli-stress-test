/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp985Component } from './comp-985.component';

describe('Comp985Component', () => {
  let component: Comp985Component;
  let fixture: ComponentFixture<Comp985Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp985Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp985Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
