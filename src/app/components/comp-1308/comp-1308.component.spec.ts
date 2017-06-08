/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1308Component } from './comp-1308.component';

describe('Comp1308Component', () => {
  let component: Comp1308Component;
  let fixture: ComponentFixture<Comp1308Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1308Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1308Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
