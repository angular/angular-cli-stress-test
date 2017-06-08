/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp970Component } from './comp-970.component';

describe('Comp970Component', () => {
  let component: Comp970Component;
  let fixture: ComponentFixture<Comp970Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp970Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp970Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
