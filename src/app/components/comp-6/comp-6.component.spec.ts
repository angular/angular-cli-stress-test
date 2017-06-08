/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp6Component } from './comp-6.component';

describe('Comp6Component', () => {
  let component: Comp6Component;
  let fixture: ComponentFixture<Comp6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
