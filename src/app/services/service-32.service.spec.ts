/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service32Service } from './service-32.service';

describe('Service32Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service32Service]
    });
  });

  it('should ...', inject([Service32Service], (service: Service32Service) => {
    expect(service).toBeTruthy();
  }));
});
