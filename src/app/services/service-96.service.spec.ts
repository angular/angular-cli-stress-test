/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service96Service } from './service-96.service';

describe('Service96Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service96Service]
    });
  });

  it('should ...', inject([Service96Service], (service: Service96Service) => {
    expect(service).toBeTruthy();
  }));
});
