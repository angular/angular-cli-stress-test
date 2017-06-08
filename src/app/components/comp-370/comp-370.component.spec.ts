/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp370Component } from './comp-370.component';

describe('Comp370Component', () => {
  let component: Comp370Component;
  let fixture: ComponentFixture<Comp370Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp370Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp370Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
