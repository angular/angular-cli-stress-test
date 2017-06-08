/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp308Component } from './comp-308.component';

describe('Comp308Component', () => {
  let component: Comp308Component;
  let fixture: ComponentFixture<Comp308Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp308Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp308Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
