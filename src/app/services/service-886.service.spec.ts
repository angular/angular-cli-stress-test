/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service886Service } from './service-886.service';

describe('Service886Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service886Service]
    });
  });

  it('should ...', inject([Service886Service], (service: Service886Service) => {
    expect(service).toBeTruthy();
  }));
});
