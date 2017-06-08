/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp631Component } from './comp-631.component';

describe('Comp631Component', () => {
  let component: Comp631Component;
  let fixture: ComponentFixture<Comp631Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp631Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp631Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
