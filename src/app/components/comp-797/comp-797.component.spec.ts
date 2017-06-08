/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp797Component } from './comp-797.component';

describe('Comp797Component', () => {
  let component: Comp797Component;
  let fixture: ComponentFixture<Comp797Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp797Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp797Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
