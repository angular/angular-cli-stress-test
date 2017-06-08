/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp973Component } from './comp-973.component';

describe('Comp973Component', () => {
  let component: Comp973Component;
  let fixture: ComponentFixture<Comp973Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp973Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp973Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
