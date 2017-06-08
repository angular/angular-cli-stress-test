/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1138Component } from './comp-1138.component';

describe('Comp1138Component', () => {
  let component: Comp1138Component;
  let fixture: ComponentFixture<Comp1138Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1138Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1138Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
