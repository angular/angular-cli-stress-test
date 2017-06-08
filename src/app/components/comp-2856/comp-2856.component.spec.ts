/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2856Component } from './comp-2856.component';

describe('Comp2856Component', () => {
  let component: Comp2856Component;
  let fixture: ComponentFixture<Comp2856Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2856Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2856Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
