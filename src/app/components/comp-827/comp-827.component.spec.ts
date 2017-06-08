/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp827Component } from './comp-827.component';

describe('Comp827Component', () => {
  let component: Comp827Component;
  let fixture: ComponentFixture<Comp827Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp827Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp827Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
