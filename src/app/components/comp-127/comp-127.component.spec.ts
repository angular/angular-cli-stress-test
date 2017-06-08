/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp127Component } from './comp-127.component';

describe('Comp127Component', () => {
  let component: Comp127Component;
  let fixture: ComponentFixture<Comp127Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp127Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp127Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
