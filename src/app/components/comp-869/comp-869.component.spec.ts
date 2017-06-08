/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp869Component } from './comp-869.component';

describe('Comp869Component', () => {
  let component: Comp869Component;
  let fixture: ComponentFixture<Comp869Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp869Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp869Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
