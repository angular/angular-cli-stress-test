/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp719Component } from './comp-719.component';

describe('Comp719Component', () => {
  let component: Comp719Component;
  let fixture: ComponentFixture<Comp719Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp719Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp719Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
