/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp415Component } from './comp-415.component';

describe('Comp415Component', () => {
  let component: Comp415Component;
  let fixture: ComponentFixture<Comp415Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp415Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp415Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
